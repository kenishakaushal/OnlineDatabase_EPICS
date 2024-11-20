# EPICS Online Database for Study Abroad Programs

## Overview  
This application is designed to help EPICS Study Abroad teams at Arizona State University (ASU) collect, store, and visualize their project data. It provides a platform to analyze data effectively and improve data quality amidst environmental disturbances. By offering tools for data entry, visualization, and user management, this project aims to address the challenges teams face in handling their data.

## Problem Statement  

### Study Abroad Teams' Challenge  
The teams lack effective tools to analyze and improve the quality of their data in the presence of environmental disturbances. This platform aims to bridge this gap by providing a user-friendly system to log, store, and visualize data, enabling better decision-making.

## Features  

### Current Functionality:  
1. **Static Frontend (Demo):**  
   - Built using HTML, CSS, JavaScript, and Bootstrap.  
   - Allows users to:  
     - View a demo of the platform's interface.  
     - Interact with static graphs and tables that display JSON-stored data.  

2. **Basic Features:**  
   - **Login Screen (No Authentication):** A simple screen to enter the platform.  
   - **Data Entry:** Teams can:  
     - Select their corresponding team.  
     - Input and log data for the following variables:  
       - Time  
       - pH  
       - Soil Moisture  
       - Salinity  
   - **Settings Page:** Users can update their profile information.  

### Planned Features:  
1. **Dynamic Backend Integration:**  
   - Migrate from static JSON data storage to a robust **MySQL database** for persistent user and data storage.  
   - Backend development using **Python** with integration to MySQL.  

2. **Authentication System:**  
   - Add user authentication for secure access to the platform.  

3. **Enhanced Data Visualization:**  
   - Display real-time graphs and tables generated from MySQL data.  
   - Allow customizable visualization options based on selected variables.  

4. **User Management:**  
   - Profile creation and editing for personalized data access.  

5. **Environmental Data Tools:**  
   - Enhance the platform to analyze environmental disturbances and their impact on team data.  

#### Plans for the Rest of the Semester/Next Semester:  
- **Calendar Feature on the Analysis Page:**  
  - Users will be able to view data from previous days, months, and years using a calendar interface.  
  - Improvements over time will be shown at the bottom of the same page.  

- **Creating New Records:**  
  - Improvements will be made to enhance the functionality and ease of creating new data records.  

- **Settings/User Profile Page Enhancements:**  
  - New sub-pages will be added:  
    - **Notifications Page:** Manage alerts and updates.  
    - **Security Page:** Update passwords and security preferences.  
    - **Appearance Page:** Customize the look and feel of the platform. 

## Technical Stack  

| Layer        | Technology       | Description                                        |  
|--------------|------------------|----------------------------------------------------|  
| **Frontend** | HTML, CSS, JS    | Demo interface built with Bootstrap framework.    |  
| **Backend**  | Python (Flask)   | (Future) Backend logic and API creation.          |  
| **Database** | MySQL            | (Future) Persistent data storage.                 |  

## Installation  

### Prerequisites:  
- Python installed (for backend development in the future).  
- MySQL installed and configured.  

### Steps:  
1. Clone the repository:  
   ```bash  
   git clone[ <repository-url>](https://github.com/kenishakaushal/OnlineDatabase_EPICS)
   cd OnlineDatabase_EPICS
2. open homeScreen.html in your browser to view the static demo.


