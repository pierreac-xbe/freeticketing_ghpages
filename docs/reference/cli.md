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

Run without any options to run the program in a loop. The interval between runs can be configured using the `run_interval_minutes` field in the `config.json` file.


### Options

| Option            | Description                                       | Platform |
| ----------------- | ------------------------------------------------- | -------- |
| `--version`       | Display the application version                   | All      |
| `--help`, `-h`    | Show the help message and exit                    | All      |
| `--once`          | Run the import process once                       | All      |
| `--update-config` | Update the configuration file from the XBE server | All      |
| `--install`       | Install the FreeTicketing service                 | Windows  |
| `--status`        | Check the status of the FreeTicketing service     | Windows  |
| `--start`         | Start the FreeTicketing service                   | Windows  |
| `--stop`          | Stop the FreeTicketing service                    | Windows  |
| `--restart`       | Restart the FreeTicketing service                 | Windows  |
| `--remove`        | Remove the FreeTicketing service                  | Windows  |
