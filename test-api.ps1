# PowerShell code to test the API using Invoke-WebRequest

# Replace "http://localhost:3000/api" with your actual API endpoint URL
$url = "http://localhost:3000/api"

# Create a hashtable to specify the headers
$headers = @{ "Content-Type" = "application/json" }

# Create the JSON data as a PowerShell object
$jsonData = @{
    name = "John"
    age = 30
} | ConvertTo-Json

# Send the POST request
$response = Invoke-WebRequest -Uri $url -Method Post -Headers $headers -Body $jsonData

# Display the response
$response.Content