var _a;
// Function to add an additional education field
function addEducationField() {
    var educationSection = document.getElementById('education-section');
    var newEducationEntry = document.createElement('div');
    newEducationEntry.className = 'education-entry';
    newEducationEntry.innerHTML = "\n        <label>Degree and School:</label>\n        <input type=\"text\" class=\"education\" name=\"education\" required>\n    ";
    educationSection.appendChild(newEducationEntry);
}
// Function to add an additional work field
function addWorkField() {
    var workSection = document.getElementById('work-section');
    var newWorkEntry = document.createElement('div');
    newWorkEntry.className = 'work-entry';
    newWorkEntry.innerHTML = "\n        <label>Position and Company:</label>\n        <input type=\"text\" class=\"work\" name=\"work\" required>\n    ";
    workSection.appendChild(newWorkEntry);
}
// Function to add an additional skill field
function addSkillField() {
    var skillsSection = document.getElementById('skills-section');
    var newSkillEntry = document.createElement('div');
    newSkillEntry.className = 'skills-entry';
    newSkillEntry.innerHTML = "\n        <label>Skill:</label>\n        <input type=\"text\" class=\"skill\" name=\"skills\" required>\n    ";
    skillsSection.appendChild(newSkillEntry);
}
// Function to add an additional hobby field
function addHobbiesField() {
    var hobbySection = document.getElementById('Hobbies-section');
    var newhobbyEntry = document.createElement('div');
    newhobbyEntry.className = 'hobby-entry';
    newhobbyEntry.innerHTML = "\n        <label>Hobby:</label>\n        <input type=\"text\" class=\"hobby\" name=\"hobby\" required>\n    ";
    hobbySection.appendChild(newhobbyEntry);
}
// Function to add an additional language field
function addLanguageField() {
    var languageSection = document.getElementById('language-section');
    var newLanguageEntry = document.createElement('div');
    newLanguageEntry.className = 'language-entry';
    newLanguageEntry.innerHTML = "\n        <label>Language:</label>\n        <input type=\"text\" class=\"language\" name=\"language\" required>\n        <label>Proficiency Level:</label>\n        <input type=\"text\" class=\"language-proficiency\" name=\"language-proficiency\" required>\n    ";
    languageSection.appendChild(newLanguageEntry);
}
// Show input fields on clicking the start button
var startButton = document.getElementById("startButton");
var container = document.getElementById("container");
var openButton = document.getElementById("openButton");
if (startButton && container) {
    startButton.addEventListener("click", function () {
        openButton.style.display = "none";
        container.style.display = "block";
    });
}
// Generate the resume content on form submission
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture user inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    var educations = Array.from(document.getElementsByClassName('education')).map(function (input) { return input.value; });
    var works = Array.from(document.getElementsByClassName('work')).map(function (input) { return input.value; });
    var skills = Array.from(document.getElementsByClassName('skill')).map(function (input) { return input.value; });
    var hobbies = Array.from(document.getElementsByClassName('hobby')).map(function (input) { return input.value; });
    // Capture Languages and Proficiency
    var languages = Array.from(document.getElementsByClassName('language'))
        .map(function (input, index) {
        var proficiencyInput = document.getElementsByClassName('language-proficiency')[index];
        return { language: input.value, proficiency: proficiencyInput === null || proficiencyInput === void 0 ? void 0 : proficiencyInput.value };
    });
    // Generate the resume content with the gathered information
    var generatedResume = document.getElementById('generated-resume');
    generatedResume.innerHTML = "\n        <div class=\"resume-content\">\n            <h3>Personal Information</h3>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n            <p><strong>Name:</strong> ").concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <ul>").concat(educations.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "</ul>\n\n            <h3>Work Experience</h3>\n            <ul>").concat(works.map(function (work) { return "<li>".concat(work, "</li>"); }).join(''), "</ul>\n\n            <h3>Skills</h3>\n            <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n\n            <h3>Hobbies</h3>\n            <ul>").concat(hobbies.map(function (hobby) { return "<li>".concat(hobby, "</li>"); }).join(''), "</ul>\n\n            <h3>Languages</h3>\n            <ul>").concat(languages.map(function (lang) { return "<li>".concat(lang.language, " - ").concat(lang.proficiency, "</li>"); }).join(''), "</ul>\n        </div>\n    ");
    document.getElementById('resume').style.display = 'block';
});
