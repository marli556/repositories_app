

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your fullname?',
      name: 'fullname',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your biodata?',
      name: 'Biodata',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn?',
      name: 'LinkedIn',
    },
    {
      type: 'input',
      message: 'What is your GitHub?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your favorite game?',
      name: 'favGame',
    },
    {
      type: 'input',
      message: 'What is your hobby?',
      name: 'hobby',
    },
  ])
  .then((response) => {
    console.log(response);
    let body = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<link rel="stylesheet" href="style.css">\n</head>\n<body>`;
    let data = `<div class="container">\n<h2>Profolio</h2>\n<hr>\n<p style="color:#333; white-space: pre-line;">\n Fullname: ${response.fullname}. \n Location: ${response.location}. \n Biodata: ${response.Biodata}. \n LinkedIn: ${response.LinkedIn}. \n GitHub: ${response.github}.\n Email: ${response.email}.\n Game: ${response.favGame}.\n Hobby: ${response.hobby}\n</p>\n</div>\n</body>\n</html>`;
    fs.writeFile('index.html', body + data, (err) =>
      err ? console.err(err) : console.log('Success!')
    );
  });

