# Troubleshooting

## Common Issues
### MSSQL Permission Error

If you encounter the following error:
"The server principal 'NT AUTHORITY\SYSTEM' is not able to access the database 'Your Ticket DB Name' under the current security context. (916) (SQLExecDirectW)"

This typically occurs when running an agent with NSSM on a Windows machine. To resolve:

1. Open SQL Server Management Studio (SSMS)
2. Connect to your database server
3. Run the following SQL script, replacing [Your Ticket DB name] with your actual database name:

```sql
USE [Your Ticket DB name];
-- Check if the 'NT AUTHORITY\SYSTEM' user already exists in the database
IF NOT EXISTS (SELECT FROM sys.database_principals WHERE name = 'NT AUTHORITY\SYSTEM')
BEGIN
-- Create a new user for 'NT AUTHORITY\SYSTEM' if it does not exist
CREATE USER [NT AUTHORITY\SYSTEM] FOR LOGIN [NT AUTHORITY\SYSTEM];
END
-- Add the 'NT AUTHORITY\SYSTEM' user to the 'db_datareader' role
ALTER ROLE [db_datareader] ADD MEMBER [NT AUTHORITY\SYSTEM];
```

4. Restart the FreeTicketing service after applying these changes
```powershell
FreeTicketing.exe --restart
```

### Checking Ticket Export Status

To check the export status or analyze stored data:

1. Locate the `free_ticketing.db` file:

   - This SQLite database is in the same directory as the FreeTicketing program

2. Download and install SQLite DB Browser:

   - Visit the official [SQLite DB Browser](https://github.com/sqlitebrowser/sqlitebrowser/releases/latest) release page
   - Choose and install the version appropriate for your operating system

3. Open and analyze the database:
   - Launch SQLite DB Browser
   - Use "Open Database" to navigate to and select free_ticketing.db
   - Browse tables, run SQL queries, and analyze data within the interface

### Analyzing Logs

When running FreeTicketing service on Windows, The logs files are located inside a `logs` folder, at the same level as the `FreeTicketing.exe` file.

```
.
├─ FreeTicketing.exe
├─ logs
    └─ service.log
```