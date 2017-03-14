## Component Hierarchy

**AuthFormContainer**
- Sign Up
- Log In

**MainContainer**
- Home
- NavBar
  - SearchBar
- ArticleIndexContainer
  - ArticleIndex
    - ArticleIndexItem

**ArticleDetailContainer**
- ArticleDetail
- CommentIndexContainer
  - CommentIndex
    - CommentIndexItem
- CommentFormContainer
  - CommentForm

**ArticleFormContainer**
- ArticleForm
  - StepFormContainer
    - StepForm


## Routes
|Path                              |Component               |
|----------------------------------|------------------------|
|"/signup"                         |"AuthFormContainer"     |
|"/login"                          |"AuthFormContainer"     |
|"/"                               |"MainContainer"         |
|"/articles(/keyword=search_query)"|"ArticleIndexContainer" |
|"/articles/:id"                   |"ArticleDetailContainer"|
|"/articles/:id/edit"              |"ArticleFormContainer"  |
|"/articles/new"                   |"ArticleFormContainer"  |
