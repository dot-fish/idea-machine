Rails app generated with [lewagon/rails-templates](https://github.com/lewagon/rails-templates), created by the [Le Wagon coding bootcamp](https://www.lewagon.com) team.

Starting the App
----------------

#### TL;DR

```
bundle install && cd app && yarn && yarn start
```

```
rails db:migrate
```

returns

```
PG::ConnectionBad: FATAL:  database "oneidea_development" does not exist
```

Highlights
----------

# react-on-rails


NOTES
-----

STRUCTURE
---------

▾ app/
  ▸ assets/
  ▸ channels/
  ▸ controllers/
  ▸ helpers/
  ▾ javascript/
    ▾ bundles/HelloWorld/
      ▸ actions/
      ▸ components/
      ▸ constants/
      ▸ containers/
      ▸ reducers/
      ▸ startup/
      ▸ store/
    ▸ packs/
  ▸ jobs/
  ▸ mailers/
  ▸ models/
  ▾ views/
    ▾ hello_world/
        index.html.erb
    ▸ ideas/
    ▸ layouts/
    ▸ pages/
▸ bin/
▸ config/
▸ db/
▸ lib/
▸ log/
▸ public/
▸ test/
▸ tmp/
  config.ru
  Gemfile
  Gemfile.lock
  package.json
  Procfile
  Procfile.dev
  Procfile.dev-server
  Rakefile
  README.md
  yarn.lock
