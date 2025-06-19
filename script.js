document.getElementById("layer1-1").classList.toggle("show")
document.getElementById("layer1-2").classList.toggle("show")
document.getElementById("layer2-1").classList.toggle("show")
document.getElementById("layer2-2").classList.toggle("show")
document.getElementById("aboutMe").classList.toggle("show")
document.getElementById("contacts").classList.toggle("show")

function layer1() {
    document.getElementById("layer2-1").classList.remove("show")
    document.getElementById("layer2-2").classList.remove("show")
    document.getElementById("layer3-projects").classList.remove("show")
    document.getElementById("layer3-pictures").classList.remove("show")
    document.getElementById("aboutMe").classList.remove("show")
    document.getElementById("contacts").classList.remove("show")
    document.getElementById("aboutMeList").classList.remove("show")
    document.getElementById("contactsList").classList.remove("show")
    
    document.getElementById("layer1-1").classList.toggle("show")
    document.getElementById("layer1-2").classList.toggle("show")
}

function layer21() {
    document.getElementById("layer2-1").classList.toggle("show")
    document.getElementById("layer2-2").classList.toggle("show")

    document.getElementById("layer3-projects").classList.remove("show")
    document.getElementById("layer3-pictures").classList.remove("show")

}

function showProjects() {
    document.getElementById("layer3-projects").classList.toggle("show")
}

function showPictures() {
    document.getElementById("layer3-pictures").classList.toggle("show")
}

function layer22() {
    document.getElementById("aboutMe").classList.toggle("show")
    document.getElementById("contacts").classList.toggle("show")

    document.getElementById("contactsList").classList.remove("show")
    document.getElementById("aboutMeList").classList.remove("show")
}

function contactShow() {
    document.getElementById("contactsList").classList.toggle("show")
}

function aboutShow() {
    document.getElementById("aboutMeList").classList.toggle("show")
}