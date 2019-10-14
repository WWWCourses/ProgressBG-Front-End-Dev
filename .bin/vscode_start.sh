# get last modified code-workspace file:
vscode_project_file=$(ls --sort=t *.code-workspace | head -1)
code ${vscode_project_file}