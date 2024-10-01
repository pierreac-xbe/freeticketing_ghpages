# Templates

Templates are used to format tickets according to specific requirements. We use the Jinja2 templating language for easy customization and flexibility.

## Template Basics

1. Create a `templates` folder in your project directory.
2. For each recipient defined in your `config.json`, create a corresponding `.j2` file with the same name.
3. Use Jinja2 syntax to define the ticket format in these `.j2` files.

## File Structure

```
|-FreeTicketing.exe
|-templates/
    |- xbe.j2
    |- recipient2.j2
```

## Available Variables

The following variables are available to use in your templates:

- `tickets`: A list of filtered ticket objects containing all ticket information.
- `exporter_config`: Configuration specific to the exporter the tickets are being sent to (from `config.json`).
- `remote_config`: Full remote configuration settings (from `config.json`).
- `local_config`: Full local configuration settings (from `config.local.json`).
- `timestamp`: The current UTC timestamp in ISO format.

## Example Template

```jinja
{
    "tickets": {{ tickets | tojson }},
    "meta": {
        "timestamp": "{{ timestamp }}"
    }
}
```

This example template creates a JSON structure with two main keys:

1. `tickets`: Contains an array of all filtered tickets, converted to JSON format using the `tojson` filter.
2. `meta`: Includes additional metadata, such as the current timestamp.

## Accessing Ticket Properties

Since `tickets` is now a list of ticket objects, you can iterate over them in your template if needed:

```jinja
{
    "tickets": [
        {% for ticket in tickets %}
        {
            "ticket_number": "{{ ticket.ticket_number }}",
            "description": "{{ ticket.description }}",
            "status": "{{ ticket.status }}"
        }{% if not loop.last %},{% endif %}
        {% endfor %}
    ],
    "meta": {
        "timestamp": "{{ timestamp }}"
    }
}
```

This example shows how to access individual ticket properties within a loop, creating a JSON array of ticket objects.

## Using Configuration Variables

You can access configuration variables in your templates as well:

```jinja
{
    "tickets": {{ tickets | tojson }},
    "meta": {
        "timestamp": "{{ timestamp }}",
        "exporter": "{{ exporter_config.name }}",
        "remote_logging_enabled": {{ remote_config.is_remote_logging_enabled | lower }},
        "database": "{{ local_config.database_connection_string }}"
    }
}
```
