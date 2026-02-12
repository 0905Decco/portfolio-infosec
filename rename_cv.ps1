$files = Get-ChildItem -Path . -Filter "*CV.pdf"
foreach ($file in $files) {
    if ($file.Name -ne "Derrick_Kibiwot_CV.pdf") {
        Write-Host "Renaming $($file.Name) to Derrick_Kibiwot_CV.pdf"
        Rename-Item -Path $file.FullName -NewName "Derrick_Kibiwot_CV.pdf" -Force
    }
}
