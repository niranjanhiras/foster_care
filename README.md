## Foster Care

**A Ruby on Rails application that demo about foster care management.**<br/>


###1. Use the demo:
**Public URL:** [https://bitoptech.org/](https://bitoptech.org/)


This program has 4 user roles for users:

- Parent
- Children
- Facility administrator
- Case Worker

Demo login users are

- Parents: 
    ```
      email: 'parent_<number>@hanoian.com'
          with number from 1 to 3. For example 'parent_1@hanoian.com'

      password: 'development'
    ```

- Childrens: 
    ```
      email: 'child_<number>@hanoian.com'
          with number from 1 to 200. For example 'children_5@hanoian.com'

      password: 'development'
    ```

- Facility administrators: 
    ```
      email: 'facility_admin_<number>@hanoian.com'
          with number from 1 to 20. For example 'facility_admin_10@hanoian.com'

      password: 'development'
    ```

- Case workers: 
    ```
      email: 'case_worker_<number>@hanoian.com'
          with number from 1 to 40. For example 'case_worker_15@hanoian.com'

      password: 'development'
    ```



###2. Application stack

- Ruby 2.3.0
- Rails 4.2.6
- Database: PostgreSQL 9.4
- UI using jQuery and Bootstrap

###3. Development on your local machine

On your local machine, you must have the following software installed:

- [RVM](https://rvm.io/rvm/install)
- Ruby 2.3.0 installed via RVM `rvm install 2.3.0 -- --enable-shared`
- PostgreSQL 9.4 with postgresql development library. 
- javascript server side runtime, ideally [NodeJS](https://nodejs.org/en/download/).


**You should fork this project [git@github.com:linhchauatl/foster_care.git](https://github.com/linhchauatl/foster_care) to your own github account.**

After you fork the project, on your local machine, run the following commands:

```
git clone git@github.com:<YOUR_GITHUB_USER>/foster_care.git
cd foster_care
```

Then you must modify the file **config/database.yml** to match with `username` and `password` of PostgreSQL on your machine. If you use the default PostgreSQL config when you install it, you don't need to modify **database.yml**

Run the following commands:

```
gem install bundler
bundle
rake db:create db:migrate
```

Load sample data from the file **db/sample_postgresql_data.sql**:

```
pg_restore -U postgres -W  -d <DATABASE NAME> 'db/sample_postgresql_data'
```

Now you can write code and test on your local machine.


###4. Deployment

This application is deployed using capistrano to a server (or servers) that has the following software installed:

- [RVM](https://rvm.io/rvm/install)
- Ruby 2.3.0 installed via RVM `rvm install 2.3.0 -- --enable-shared`
- PostgreSQL 9.4 with postgresql development library. 
  ```
  CentOS dev library: postgresql-devel.x86_64
  Ubuntu dev library: postgresql-server-dev-9.4
  ```

- Inside PostgreSQL, you must create a database that match the name specified in your **database.yml**. For example, for staging environment, it is `foster_care_staging`
- javascript server side runtime, ideally [NodeJS](https://nodejs.org/en/download/).
- [nginx](http://nginx.org/en/download.html) webserver that configured to talk with [puma](https://github.com/puma/puma) of `foster_care`.
- SSH login with public key authorization configured to allow one of your private keys on your local machine to login. 
- Generate public/private keypair on target server, and add public key to your github account. [Information about keys generation](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

- Once you setup the server(s), on your local machine, modify the file **config/deploy/deploy_config.yml** to match with your server configurations and point to correct local private key on your development machine.



Then on your local machine, you can use command `cap staging deploy` to deploy to your staging server(s).

Deploy to production server(s): `cap production deploy`

