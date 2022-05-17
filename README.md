# :shopping: Shopify Starter
This is a starter Shopify 2.0 Theme that uses Tailwind CSS for styling & JSON templates

## How to use

- First you need to have Shopify ClI installed requires Ruby 2.7 or higher 
[Install Shopify Cli](https://shopify.dev/themes/tools/cli/installation)

- You will need a Shopify [partner account](https://www.shopify.com/partners?shpxid=cf5b8f0a-EA54-476B-455E-0A93955BA2F4)

- In the Shopify Admin set up your [development store](https://shopify.dev/themes/tools/development-stores)

- Note you will eventually have to add products in store admin.

- Once you have your development environment setup you will need to initialize a new theme with the following [Shopify ClI command](https://shopify.dev/themes/tools/cli/theme-commands)

```sh
shopify theme init [ NAME OF YOUR THEME ] --clone-url https://github.com/Ongomobile/ShopifyStarter.git
```

- Run npm install to install dependencies

- Next you will need to [log into](https://shopify.dev/apps/tools/cli/core-commands) you Shopify Store on the command line

```sh
shopify login --store store-name.myshopify.com
```

- It will open a browser window follow prompts to login

- Next run 
```sh
shopify theme serve
```

 It will have a section in terminal with links to theme editor for this theme & a preview link for this theme. Note this is not the default Dawn theme, and it's not the published theme.

 - Note the first time you go to the preview url shown in the terminal you will need to enter the password you can find it by going to the shopify admin page for your development store, click on online store in left pannel and you will see see store password button at the top of page.

- If you have trouble with theme serve command you may need
  Log out shopify admin in browser & shopify cli then log in your-store.myshopify.com/admin & login with cli shopify login --store your-store.myshopify.com & finally run shopify theme serve again

  ## Tailwind CSS
  - [Tailwind Docs](https://tailwindcss.com/docs/installation)
  - To watch & compile Tailwind in this theme you will need to open another terminal and run
  
  ```sh
    npx tailwindcss -i ./src/tailwind.css -o ./assets/application.css --watch 
  ```