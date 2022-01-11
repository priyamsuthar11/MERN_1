# MERN_1
<Formik initialValues={} omSubmit={} validationSchema={}>


git & github

what is GIT

-git is a version control system
-file ki histroy ko save karta he


git and github is diffrent

install git
git --version

git config --global user.name "priyam suthar"
git config --global user.email "priyam.suthar@teksuninfosys.com"

git config --global user.name     // to check user Name

git config --global user.email     // to check user email

git config --global --edit    // for edit name and Email


open project directory in terminal

1) git init
2) ls
3) ls -a   // .git vadi file dekhase


4) git status     // for status

5) git add <file name> // aa karvathi aa file staging area ma aavi jase  hold the changes before commit

  working directory
        |
        |   git add
        |
   staging area
        |
        |  git commit
        |
    repository

6) git commit   or
6) git commit -m "message of commit"  // commit thai jase

7) git log   // commit information
8) git status    // jo file modified karo to ahiya batavse

8) git add .     //badhi file staging area ma jati rese
9) git commit -m "all files are commited"

10) git log

if you want to go previous commit
11) git checkout <commit hash code/branch name>
12) git checkout master

branch

1) git branch
2) git branch <branch name>
   git branch dev
3) git branch       // for check branches
  * vadi current branch che

4) git checkout dev    // Switched to branch 'dev' dev vadi branch ma java mate
5) git branch

6) git merge dev    // current branch jode dev branch ne merge karavi didhi


.gitignore file ma je file nu name hase e git ma nai jay



# LETS MOVE ON GITHUB
open github make new repo

1) git remote -v
2) git remote add origin https://github.com/priyamsuthar11/MERN_1.git
3) git remote -v
  origin	https://github.com/priyamsuthar11/MERN_1.git (fetch)
origin	https://github.com/priyamsuthar11/MERN_1.git (push)

4) git branch -M main
   git branch -M master

5) git push -u origin master
Username for 'https://github.com':    generated token
password : generated token

done

how to clone or fork

click fork  // bija ni repository aapda ma lava mate
click code and copy url
paste url where u want to in directory
git clone <url>

github workflow

1.  fork
2. clone
3. commit
4. pull request
5. merged
