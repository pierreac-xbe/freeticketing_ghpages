# Command Line Interface

The primary way to interact with the FreeTicking agent is through the command line interface (CLI).

## Usage

::: code-group

```powershell [Windows]
.\FreeTicking.exe --version
```

```bash [Linux / macOS]
./FreeTicking --version
```

:::

### Options

| Option            | Description                                       | Platform |
| ----------------- | ------------------------------------------------- | -------- |
| `--help`, `-h`    | Show the help message and exit                    | All      |
| `--once`          | Run the import process once                       | All      |
| `--update-config` | Update the configuration file from the XBE server | All      |
| `--version`       | Display the application version                   | All      |
| `--install`       | Install the FreeTicketing service                 | Windows  |
| `--status`        | Check the status of the FreeTicketing service     | Windows  |
| `--start`         | Start the FreeTicketing service                   | Windows  |
| `--stop`          | Stop the FreeTicketing service                    | Windows  |
| `--restart`       | Restart the FreeTicketing service                 | Windows  |
| `--remove`        | Remove the FreeTicketing service                  | Windows  |
