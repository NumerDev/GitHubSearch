# GitHubApiSearch

Recruitment project

## Instalation

- Clone the repo with `git clone git@github.com:NumerDev/GitHubSearch.git`
- Run `npm install` to install NPM packages.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Desing & Preview

![obraz](https://i.imgur.com/8s4Ht5V.gif)

## Aplication structure

```
    app\
        components\
            SearchView              - Main view
            Wildcard                - 404 view
        details\                    - Details module for lazy loading
            components\
                repositoryInfo      - Informations about repository
        services\
            GitHubRequest           - Service to communicate with GitHub API
    styles\
        _colors                     - Partial
        _functions                  - Partial
        styles                      - Global scss file
    assets\
```
