const drf = 0.882;

function calculateMissileDamage(damage = 0, signature, explosionRadius, targetVelocity, explosionVelocity, reductionFactor){
  return damage * Math.min(1, signature / explosionRadius, Math.pow( (signature * explosionVelocity) / (explosionRadius * targetVelocity ), reductionFactor));
}

function largeMissileCalc(d, sig, E, Vt, Ve){
  return calculateMissileDamage(d, sig, E, Vt, Ve, 0.882);
}

function heavyMissleCalc(d, sig, E, Vt, Ve){
  return calculateMissileDamage(d, sig, E, Vt, Ve, 0.682);
}

function reduction(signature, mvf){
  return signature * mvf;
}

function runTest(targetSignature, targetVelocity, baseExlosionVelocity, baseExlosionRadius, damage = 100){

  console.log(`target signature: ${targetSignature}m, target velocity: ${targetVelocity}m/s`);
  console.log(`Base Explosion Velocity: ${baseExlosionVelocity}`);
  console.log(`Base Explosion Radius: ${baseExlosionRadius}`);

  console.log(`base: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius, targetVelocity, baseExlosionVelocity)}%`);
  console.log(`5/4/0 skills: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity)}%`);
  console.log(`5/4/0 skills + 15% expRad: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity * 1.15)}%`);
  console.log(`5/4/0 skills + 14% expVel: ${heavyMissleCalc(damage, targetSignature, (baseExlosionRadius * 0.75) * 0.86, targetVelocity, baseExlosionVelocity)}%`);
  console.log(`5/4/0 skills + 17.5% damage: ${heavyMissleCalc(damage * 1.175, targetSignature, baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity)}%`);
  console.log(`5/4/0 skills + 1 Statis Webbifier: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius * 0.75, targetVelocity * 0.41, baseExlosionVelocity)}%`);
  console.log(`5/4/0 skills + 1 Target Painter: ${heavyMissleCalc(damage, targetSignature * 1.29, baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity)}%\n`);
}

function runTest2(targetSignature, targetVelocity, baseExlosionVelocity, baseExlosionRadius, damage = 100){

  console.log(`target signature: ${targetSignature}m, target velocity: ${targetVelocity}m/s`);
  console.log(`Base Explosion Velocity: ${baseExlosionVelocity}`);
  console.log(`Base Explosion Radius: ${baseExlosionRadius}`);
  console.log(`Base damage: ${damage}`);

  console.log(`base: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius, targetVelocity, baseExlosionVelocity)} Total Damage`);
  console.log(`5/4/0 skills: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity)} Total Damage`);
  console.log(`5/4/0 skills + 15% expRad: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity * 1.15)} Total Damage`);
  console.log(`5/4/0 skills + 14% expVel: ${heavyMissleCalc(damage, targetSignature, (baseExlosionRadius * 0.75) * 0.86, targetVelocity, baseExlosionVelocity)} Total Damage`);
  console.log(`5/4/0 skills + 17.5% damage: ${heavyMissleCalc(damage * 1.175, targetSignature, baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity)} Total Damage`);
  console.log(`5/4/0 skills + 1 Statis Webbifier: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius * 0.75, targetVelocity * 0.41, baseExlosionVelocity)} Total Damage`);
  console.log(`5/4/0 skills + 1 Target Painter: ${heavyMissleCalc(damage, targetSignature * 1.29, baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity)} Total Damage\n`);
  console.log(`5/4/0 skills + 1 Statis Webbifier + 1 Target Painter: ${heavyMissleCalc(damage, targetSignature * 1.29, baseExlosionRadius * 0.75, targetVelocity * 0.41, baseExlosionVelocity)} Total Damage`);
  console.log(`5/4/0 skills + 2 Statis Webbifier: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius * 0.75, (targetVelocity * 0.41) * 0.41, baseExlosionVelocity)} Total Damage`);
  console.log(`5/4/0 skills + 2 Target Painter: ${heavyMissleCalc(damage, targetSignature * (1 + 0.29 + 0.29), baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity)} Total Damage\n`);
}

function runTest3(targetSignature, targetVelocity, baseExlosionVelocity, baseExlosionRadius, damage = 100){
  console.log(`5/4/0 skills + 1 Statis Webbifier + 1 Target Painter: ${heavyMissleCalc(damage, targetSignature * 1.29, baseExlosionRadius * 0.75, targetVelocity * 0.41, baseExlosionVelocity)} Total Damage`);
  console.log(`5/4/0 skills + 2 Statis Webbifier: ${heavyMissleCalc(damage, targetSignature, baseExlosionRadius * 0.75, (targetVelocity * 0.41) * 0.41, baseExlosionVelocity)} Total Damage`);
  console.log(`5/4/0 skills + 2 Target Painter: ${heavyMissleCalc(damage, targetSignature * (1 + 0.29 + 0.29), baseExlosionRadius * 0.75, targetVelocity, baseExlosionVelocity)} Total Damage\n`);
}

// console.log("Medium Rapid missile Launcher Damage test\n");
// runTest2(23, 600, 170, 40, 48.44*4);
// // runTest3(86.4, 300, 81, 140, 96.52*4);
// // runTest3(202.3, 200, 81, 140, 96.52*4);
// console.log("Medium Missile Launcher Damage test\n");
// runTest2(23, 600, 81, 140, 114*4);
// // runTest3(86.4, 300, 69, 300, 241*4);
// // runTest3(202.3, 200, 69, 300,241*4);
// console.log("Medium Torpeado Launcher Damage test\n");
// // runTest2(23, 600, 101, 125, 75.46*4);

// runTest2(23, 600, 71, 450, 606*4*7);
const damage = 3355.975 * 4;
const exRad = 450;
const exVel = 71;
console.log("Large Torpedo launcher Damage test\n");
runTest2(23, 600, exVel, exRad, damage);
runTest2(86.4, 300, exVel, exRad, damage);
runTest2(202.3, 200, exVel, exRad, damage);