# Fetch Latest Tickets

The SQL query files are used to fetch the latest tickets from the ticket database.

## File Structure

1. Create a `latest_tickets` folder in your project's root directory.
2. Inside this folder, create `.sql` files. We recommend using an alphanumeric naming convention.

```
|-FreeTicketing.exe
|-- latest_tickets/
    |-- 01_first.sql
    |-- 02_second.sql
```

## Execution

The program will automatically sort these files in alphanumeric order and execute them in order.

## SQL File Content

Each SQL file should contain the necessary queries to fetch the latest tickets. The specific content will depend on your database schema and requirements. 

:::tip
There's no need to include pagination or limit clauses in your SQL queries, as the program automatically handles these aspects.
:::

:::warning
Ensure that your queries are optimized for performance, especially when dealing with large datasets.
:::

## Example query
```sql
-- Example SQL query to fetch latest tickets
SELECT
    ticket_id,
    ticket_number,
    customer_name,
    ticket_type,
    ticket_status,
    ticket_at,
    total_weight
FROM
    TicketDatabase
WHERE
    ticket_id IS NOT NULL
    AND ticket_at >= DATEADD(hour, -24, GETDATE())
ORDER BY
    ticket_at DESC
```
This example query fetches tickets created in the last 24 hours, ordered by creation time in descending order.