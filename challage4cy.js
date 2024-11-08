function printcybersecurityData(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(`Level: ${data[i].level}`);
        console.log(`Job Openings: ${data[i].jobOpenings}`);
        console.log(`Available Talent: ${data[i].availableTalent}`);
    }
}

let talentData = [];

let entryLevel = {
    level: "Entry Level",
    jobOpenings: 0,
    availableTalent: 0
};

let midLevel = {
    level: "Mid Level",
    jobOpenings: 0,
    availableTalent: 0
};

let seniorLevel = {
    level: "Senior Level",
    jobOpenings: 0,
    availableTalent: 0
};

talentData.push(entryLevel, midLevel, seniorLevel);

talentData[0].jobOpenings = 50;
talentData[0].availableTalent = 200;

talentData[1].jobOpenings = 30;
talentData[1].availableTalent = 150;

talentData[2].jobOpenings = 20;
talentData[2].availableTalent = 100;

console.log(talentData);

function calculateTotalGap(talentData) {
    let totalGap = 0;
    for (let i = 0; i < talentData.length; i++) {
        totalGap += talentData[i].jobOpenings;
    }
    console.log(`There is a combined total of ${totalGap} openings for cyber security roles.`);
}

function findLargestOpenings(talentData) {
    let largestOpenings = 0;
    let largestLevel = "";
    for (let i = 0; i < talentData.length; i++) {
        if (talentData[i].jobOpenings > largestOpenings) {
            largestOpenings = talentData[i].jobOpenings;
            largestLevel = talentData[i].level;
        }
    }
    console.log(`The largest number of job openings is ${largestOpenings} at the ${largestLevel} level.`);
}

// Call the functions to display the output
printcybersecurityData(talentData);
calculateTotalGap(talentData);
findLargestOpenings(talentData);