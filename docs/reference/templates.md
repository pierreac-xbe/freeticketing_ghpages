# Templates

Templates are used to format tickets according to specific requirements. We use the Jinja2 templating language for easy customization and flexibility.

## Template Basics

1. Create a `templates` folder in your project directory.
2. For each recipient defined in your `config.json`, create a corresponding `.j2` file with the same name.
3. Use Jinja2 syntax to define the ticket format in these `.j2` files.

## File Structure

```
|-FreeTicking.exe
|-- templates/
    |-- xbe.j2
    |-- recipient2.j2
```

## Available Variables

The following variables are available to use in your templates:
- `ticket`: The ticket object containing all ticket information.
- `exporter_config`: Configuration specific to the exporter the ticket is being sent to (from `config.json`).
- `remote_config`: Full remote configuration settings (from `config.json`).
- `local_config`: Full local configuration settings (from `local_config.json`).

## Example Template

```jinja
{
    "ticket_number": "{{ ticket.ticket_number }}",
    "description": "{{ ticket.description }}",
    "status": "{{ ticket.status }}"
}
```