
const owner = "user"; // your Github User
const token = "vfdgdf"; // your token, read the readme for more info
let pdfFile = null;
let theFileData  = null;

function uploadFile(file, fileData, repo, folder) {
    return fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${folder}/${file.name}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          message: "upload file from api",
          content: fileData
        })
      }
    ).then((res) => res.json());
  }

 
function uploadTasks() {
    const selectedfile = document.getElementById('fileID')
    pdfFile = selectedfile.files[0];
    const thefileReader = new FileReader();
    thefileReader.onload = () => {
        const srcData = thefileReader.result;
        theFileData = srcData.split(',')[1]
    };
    thefileReader.readAsDataURL(pdfFile);
    //console.log(pdfFile)
}
  

function fillForm(){
    //console.log(theFileData)
    
    const repoName = document.getElementById('repoName').value;
    const folderName= document.getElementById('folderName').value;
    if(repoName !== '' && folderName !== ''){
        uploadFile(pdfFile, theFileData, repoName, folderName)}
    else{
        alert('Please complete the fields')
    }

}
  
   
