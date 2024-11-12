# ODBC Setup

This guide covers ODBC setup for Windows, Linux, and macOS, with a focus on Microsoft SQL Server and Microsoft Access connections.

:::info
Microsoft provides an excellent [guide](https://learn.microsoft.com/en-us/sql/connect/odbc/microsoft-odbc-driver-for-sql-server?view=sql-server-ver16) on ODBC.
:::

For all platforms, ensure you have the necessary permissions and network access to connect to your database server.

## Windows

### ODBC Driver Installation

1. Download the latest ODBC driver:

   - For SQL Server: [Microsoft ODBC Driver for SQL Server](https://docs.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server)
   - For Access: [Microsoft Access Database Engine](https://www.microsoft.com/en-us/download/details.aspx?id=54920)
   - For MySQL: [MySQL ODBC Driver](https://dev.mysql.com/downloads/connector/odbc/)
   - For PostgreSQL: [PostgreSQL ODBC Driver](https://odbc.postgresql.org/)
   - For ADS: Advantage Database Server ODBC Driver

2. Run the installer and follow the prompts to complete the installation.

### ODBC Data Source Setup

1. Open the ODBC Data Source Administrator:

   - For 64-bit: Search for "ODBC Data Sources (64-bit)" in the Start menu
   - For 32-bit: Search for "ODBC Data Sources (32-bit)" in the Start menu

2. In the ODBC Data Source Administrator, click the "Add" button under "System DSN".

3. Select the appropriate driver (e.g. SQL Server) and click "Finish".

4. Configure the data source:

   - Name: Enter "FreeTicketing".
   - Description: Optional, enter a description for the data source.
   - For SQL Server
       - Server: Enter the server name or IP address.
       - Database: Select or enter the database name.
       - Authentication: Choose the appropriate authentication method.
       - Click "Test Connection" to verify the setup, then click "OK" to save.
   - For Access
       - Click on 'Select' to select the Access database file ending with .accdb or .mdb.
   - For ADS
       - Check the 'Data Dictionary' box
           - Browse to and select the 'WM2000DATA.ADD' file.
       - Available Server Types: Make sure 'Remote Server' is checked.
       - Click "OK" to save

## Linux

Linux ODBC setup varies by distribution and database. Here's a general outline:

1. Install unixODBC:

   ```
   sudo apt-get install unixodbc unixodbc-dev (for Debian/Ubuntu)
   sudo yum install unixODBC unixODBC-devel (for CentOS/RHEL)
   ```

2. Install the appropriate ODBC driver for your database.

3. Configure the ODBC driver in `/etc/odbcinst.ini`.

4. Set up the DSN in `/etc/odbc.ini`:

   ```
   [FreeTicketing]
   Driver = YourODBCDriver
   Server = YourServerAddress
   Database = YourDatabaseName
   ```

5. Test the connection using `isql FreeTicketing`.

## macOS

macOS ODBC setup is similar to Linux:

1. Install unixODBC using Homebrew:

   ```
   brew install unixodbc
   ```

2. Install the appropriate ODBC driver for your database.

3. Configure the ODBC driver in `/usr/local/etc/odbcinst.ini`.

4. Set up the DSN in `/usr/local/etc/odbc.ini`:

   ```
   [FreeTicketing]
   Driver = YourODBCDriver
   Server = YourServerAddress
   Database = YourDatabaseName
   ```

5. Test the connection using `iodbctest "DSN=FreeTicketing"`.
