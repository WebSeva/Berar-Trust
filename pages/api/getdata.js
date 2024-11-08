const fs = require('fs');
let jsonFilePath = 'public/ngo.json'; // Correct path for your file

export default function handler(req, res) {
    console.log('Attempting to read the JSON file...');
    
    const readJson = () => {
        // Check if the file exists before attempting to read it
        if (!fs.existsSync(jsonFilePath)) {
            console.error('The file does not exist at the specified path:', jsonFilePath);
            return res.status(500).json({ error: 'File not found at the path.' });
        }

        fs.readFile(jsonFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).json({ error: 'Failed to read JSON file.' });
            }

            // Log raw data to check the content
            console.log('Raw data:', data);

            if (!data) {
                return res.status(500).json({ error: 'No data found in the file.' });
            }

            try {
                const jsonObject = JSON.parse(data);
                console.log(jsonObject['name']);
                
                let newWebsiteData = {
                    name: jsonObject['name'],
                    description: jsonObject['description'],
                    founder: jsonObject['founder'],
                    founder_description: jsonObject['founder_description'],
                    vision: jsonObject['vision'],
                    mission: jsonObject['mission'],
                    values: jsonObject['values'],
                    contact: jsonObject['contact'],
                    ngo_experience: jsonObject['ngo_experience'],
                    project_one_title: jsonObject['project_one_title'],
                    project_one_description: jsonObject['project_one_description'],
                    project_two_title: jsonObject['project_two_title'],
                    project_two_description: jsonObject['project_two_description'],
                    project_three_title: jsonObject['project_three_title'],
                    project_three_description: jsonObject['project_three_description'],
                    project_four_title: jsonObject['project_four_title'],
                    project_four_description: jsonObject['project_four_description'],
                    project_five_title: jsonObject['project_five_title'],
                    project_five_description: jsonObject['project_five_description'],
                    project_six_title: jsonObject['project_six_title'],
                    project_six_description: jsonObject['project_six_description']
                };
                
                console.log(newWebsiteData);
                return res.status(200).json({ message: newWebsiteData });
            } catch (parseErr) {
                console.error('Error parsing JSON:', parseErr);
                return res.status(500).json({ error: 'An error occurred while parsing the JSON data.' });
            }
        });
    };

    readJson();
}
