# Fetch Latest Tickets

This guide provides instructions on how to fetch the latest tickets from your ticket database using SQL query files.

:::info
This guide is only applicable when using FreeTicketing without XBE. If you're using FreeTicketing with XBE, the SQL queries are automatically managed and updated through the XBE API, and you don't need to manually set up or modify any SQL queries.
:::

## File Structure

1. Create a `latest_tickets` folder in the same directory as the FreeTicketing executable.
2. Inside this folder, create one or more `.sql` files containing your queries to fetch the latest tickets.
3. We recommend using an alphanumeric naming convention for these SQL files (e.g., `01_fetch_recent_tickets.sql`, `02_fetch_open_tickets.sql`).

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