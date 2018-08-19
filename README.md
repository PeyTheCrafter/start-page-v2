# Information and usage
Here you can find useful information for the use and modification of the page.
If you have any problems, contact me via email peythecrafter@gmail.com.

# How to "install"
1. Click **_Clone or download_** and **_Download ZIP_**. This will download a ZIP file with the page.
2. Now we need find a location for our page. I would recommend you to put in **_documents_** folder.
3. Once we have decided our location, we will **_open the downloaded ZIP file_**. We will see a folder called **_start-page-v2-master_**.
4. **_Extract the folder in the choosen location_**.
5. **_Open the folder_** and double click the **_index.html_** file. If ir asks you with wich program do you want to open it, select your browser (Chrome or Firefox, with Explorer/Edge probably will not work).
6. Now you are in the start page. Copy the URL of the page (something like this):
  `file:///UNIT:/Users/NAME/Documents/PROG/StartPage/index.html`, being UNIT your storage unit letter and NAME your computer name.

Depending of your browser, you will need to make different steps. Let's see Firefox and Chrome.

### Firefox (any version)
1. Go to **_Menu_** and click **_Options_** (about:preferences).
2. In the left menu, **_click on Home_**.
3. In the **fourth line** you have a combobox. Click on it and select **_Custom URLs_**.
4. Now a text input has appeared. Paste the page URL on it.
5. Restart browser and enjoy your new start page!

### Chrome
1. Go to **_Menu_** and click **_Options_** (chrome://settings/).
2. At the bottom of the options page, we will select **_Open specific page or set of pages_**.
3. **Click _Add a new page_**.
4. **_Paste the page URL_**.
5. Restart browser and enjoy your new start page!

# Editing city and links
## Changing city for weather
1. Go to http://woeid.rosselliot.co.nz/.
2. Search yout city by name or zip code.
3. Copy the code in the **WOEID** column.
4. Open **_js/weather.js_** (right click and edit).
5. Edit the two first lines:<br>
  `var city = "your city name, State";`<br>
  `var id = "your woeid code";`<br>
6. Save and close the editor.
It's very important to use `"` and end the line with `;`.

## Changing/editing links
Coming soon.
