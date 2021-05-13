
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
# Project Name
${data.projectname}

# Description
${data.description}

# Motivation 
${data.motivation}

# Contact Information 
* GitHub Username: ${data.username}
* Contact Email: ${data.userEmail}
`;
}

//need to export the generateMarkdown function 
module.exports = generateMarkdown;