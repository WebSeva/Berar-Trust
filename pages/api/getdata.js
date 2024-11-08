export default async function handler(req, res) {
    console.log('Attempting to fetch the JSON file...');
    
    try {
        // URL to the public JSON file
        const jsonFileUrl = 'https://berar-trust.vercel.app/ngo.json';
        
        // Fetch the JSON data from the public folder
        const response = await fetch(jsonFileUrl);

        if (!response.ok) {
            console.error('Failed to fetch the JSON file:', response.statusText);
            return res.status(500).json({ error: 'Failed to fetch JSON file.' });
        }

        const jsonData = await response.json();
        console.log('JSON Data:', jsonData);

        // Extract the necessary data
        let newWebsiteData = {
            name: jsonData['name'],
            description: jsonData['description'],
            founder: jsonData['founder'],
            founder_description: jsonData['founder_description'],
            vision: jsonData['vision'],
            mission: jsonData['mission'],
            values: jsonData['values'],
            contact: jsonData['contact'],
            ngo_experience: jsonData['ngo_experience'],
            project_one_title: jsonData['project_one_title'],
            project_one_description: jsonData['project_one_description'],
            project_two_title: jsonData['project_two_title'],
            project_two_description: jsonData['project_two_description'],
            project_three_title: jsonData['project_three_title'],
            project_three_description: jsonData['project_three_description'],
            project_four_title: jsonData['project_four_title'],
            project_four_description: jsonData['project_four_description'],
            project_five_title: jsonData['project_five_title'],
            project_five_description: jsonData['project_five_description'],
            project_six_title: jsonData['project_six_title'],
            project_six_description: jsonData['project_six_description']
        };

        return res.status(200).json({ message: newWebsiteData });

    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        return res.status(500).json({ error: 'Failed to read or parse the JSON file.' });
    }
}
