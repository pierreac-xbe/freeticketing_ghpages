# Running as a Service

This guide explains how to run FreeTicketing as a service on Windows, Linux, and macOS.

## Windows

FreeTicketing supports automated service setup on Windows, powered by [NSSM](https://nssm.cc).

::: warning
Make sure to open the FreeTicketing folder with Command Prompt or PowerShell as **Administrator**.
:::

To install FreeTicketing as a Windows service:

1. Open Command Prompt or PowerShell as Administrator.
2. Navigate to the FreeTicketing folder.
3. Run the following command to install the service:
```powershell
FreeTicketing.exe --install
```
4. To start the service:
```powershell
FreeTicketing.exe --start
```
To learn more about the CLI options, see [reference](../guide/cli.md).

## Linux

To run FreeTicketing as a service on Linux, you can use systemd:

1. Create a service file:

```bash
sudo nano /etc/systemd/system/freeticketing.service
```

2. Add the following content (adjust paths as needed):

```ini
[Unit]
Description=FreeTicketing Service
After=network.target

[Service]
ExecStart=/path/to/freeticketing
WorkingDirectory=/path/to/freeticketing/directory
User=your_user
Restart=always

[Install]
WantedBy=multi-user.target
```

3. Save and exit the editor.

4. Reload systemd:

```bash
sudo systemctl daemon-reload
```

5. Enable and start the service:

```bash
sudo systemctl enable freeticketing
sudo systemctl start freeticketing
```

## macOS

To run FreeTicketing as a service on macOS, you can use launchd:

1. Create a plist file:

```bash
sudo nano /Library/LaunchDaemons/com.freeticketing.plist
```

2. Add the following content (adjust paths as needed):

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
   <dict>
       <key>Label</key>
       <string>com.freeticketing</string>
       <key>ProgramArguments</key>
       <array>
           <string>/path/to/freeticketing</string>
       </array>
       <key>RunAtLoad</key>
       <true/>
       <key>KeepAlive</key>
       <true/>
       <key>WorkingDirectory</key>
       <string>/path/to/freeticketing/directory</string>
       <key>StandardOutPath</key>
       <string>/tmp/freeticketing.stdout</string>
       <key>StandardErrorPath</key>
       <string>/tmp/freeticketing.stderr</string>
   </dict>
   </plist>
   ```

3. Save and exit the editor.

4. Load and start the service:

```bash
sudo launchctl load /Library/LaunchDaemons/com.freeticketing.plist
sudo launchctl start com.freeticketing
```
