# Command Line Interface

The primary way to interact with the FreeTicketing agent is through the command line interface (CLI).

## Usage

### Basic Commands

::: code-group

```powershell [Windows]
# Check version
FreeTicketing.exe --version

# Run once (not in loop)
FreeTicketing.exe --once

# Update configuration from XBE server
FreeTicketing.exe --update-config

# Execute a SQL query
FreeTicketing.exe --execute-query "SELECT * FROM tickets WHERE status = 'pending'"

# Run cleanup service
FreeTicketing.exe --cleanup
```

```bash [Linux / macOS]
# Check version
./FreeTicketing --version

# Run once (not in loop)
./FreeTicketing --once

# Update configuration from XBE server
./FreeTicketing --update-config

# Execute a SQL query
./FreeTicketing --execute-query "SELECT * FROM tickets WHERE status = 'pending'"

# Run cleanup service
./FreeTicketing --cleanup
```

:::

### Windows Service Commands

```powershell
# Install service with default name
FreeTicketing.exe --install

# Install service with custom name
FreeTicketing.exe --install --name "MyFreeTicketing"

# Check service status
FreeTicketing.exe --status

# Start service
FreeTicketing.exe --start

# Stop service
FreeTicketing.exe --stop

# Restart service
FreeTicketing.exe --restart

# Remove service
FreeTicketing.exe --remove
```

### Default Behavior
Run without any options to start the program in a continuous loop. The interval between runs can be configured using the `run_interval_minutes` field in the `config.json` file.


### Options

| Option            | Description                                       | Platform |
| ----------------- | ------------------------------------------------- | -------- |
| `--version`       | Display the application version                   | All      |
| `--help`, `-h`    | Show the help message and exit                    | All      |
| `--once`          | Run the import process once                       | All      |
| `--update-config` | Update the configuration file from the XBE server | All      |
| `--execute-query` | Execute a SQL query and display the results      | All      |
| `--cleanup`       | Run cleanup service to delete old tickets and logs | All      |
| `--install`       | Install the FreeTicketing service                 | Windows  |
| `--name`          | Custom name for the service (default: FreeTicketing) | Windows  |
| `--status`        | Check the status of the FreeTicketing service     | Windows  |
| `--start`         | Start the FreeTicketing service                   | Windows  |
| `--stop`          | Stop the FreeTicketing service                    | Windows  |
| `--restart`       | Restart the FreeTicketing service                 | Windows  |
| `--remove`        | Remove the FreeTicketing service                  | Windows  |
