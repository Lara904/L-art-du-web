// Script pour tester automatiquement les scores Lighthouse
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const runLighthouse = async (url) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
    port: chrome.port
  };
  
  const runnerResult = await lighthouse(url, options);
  
  // Extraire les scores
  const scores = {
    performance: Math.round(runnerResult.lhr.categories.performance.score * 100),
    accessibility: Math.round(runnerResult.lhr.categories.accessibility.score * 100),
    bestPractices: Math.round(runnerResult.lhr.categories['best-practices'].score * 100),
    seo: Math.round(runnerResult.lhr.categories.seo.score * 100),
    pwa: Math.round(runnerResult.lhr.categories.pwa.score * 100)
  };
  
  console.log('📊 Scores Lighthouse:');
  console.log('====================');
  console.log(`🚀 Performance: ${scores.performance}%`);
  console.log(`♿ Accessibilité: ${scores.accessibility}%`);
  console.log(`✅ Meilleures pratiques: ${scores.bestPractices}%`);
  console.log(`🔍 SEO: ${scores.seo}%`);
  console.log(`📱 PWA: ${scores.pwa}%`);
  
  // Vérifier si les scores atteignent les objectifs
  const targets = {
    performance: 98,
    accessibility: 98,
    bestPractices: 98,
    seo: 98,
    pwa: 90
  };
  
  let allTargetsMet = true;
  
  for (const [category, target] of Object.entries(targets)) {
    if (scores[category] < target) {
      console.log(`⚠️  ${category} est en dessous de l'objectif (${scores[category]}% < ${target}%)`);
      allTargetsMet = false;
    }
  }
  
  if (allTargetsMet) {
    console.log('✅ Tous les objectifs Lighthouse sont atteints! 🎉');
  } else {
    console.log('❌ Certains objectifs ne sont pas atteints.');
  }
  
  // Générer le rapport HTML
  const reportHtml = runnerResult.report;
  const fs = require('fs');
  fs.writeFileSync('lighthouse-report.html', reportHtml);
  console.log('📄 Rapport détaillé sauvegardé dans lighthouse-report.html');
  
  await chrome.kill();
  
  return scores;
};

// Exécuter les tests
const url = process.argv[2] || 'http://localhost:3000';
console.log(`🔍 Test de ${url}...`);
runLighthouse(url).catch(console.error);
