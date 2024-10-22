const fs = require('fs');let jsonFilePath = "./ngo.json";

export default function handler(req, res) {
    console.log('trying to read the joson')
        const readJson = ()=>{
            console.log('trying to read the json')
           
            let jsonFilePath = './ngo.json';
            fs.readFile(jsonFilePath, 'utf8', (err, data) => {

                try{
                      const jsonObject = JSON.parse(data);
                      console.log(jsonObject['name']);
                      let newWebsiteData = {
                            name:jsonObject['name'],
                            description:jsonObject['description'],
                            founder:jsonObject['founder'],
                            founder_description:jsonObject['founder_description'], 
                            vision:jsonObject['vision'],
                            mission:jsonObject['mission'],
                            values:jsonObject['values'],
                            project_one_title:jsonObject['project_one_title'],
                            project_one_description:jsonObject['project_one_description'],
                            project_two_title:jsonObject['project_two_title'],
                            project_two_description:jsonObject['project_two_description'],
                            project_three_title:jsonObject['project_three_title'],
                            project_three_description:jsonObject['project_three_description'],
                            project_four_title:jsonObject['project_four_title'],
                            project_four_description:jsonObject['project_four_description'],
                            project_five_title:jsonObject['project_five_title'],
                            project_five_description:jsonObject['project_five_description'],
                            project_six_title:jsonObject['project_six_title'],
                            project_six_description:jsonObject['project_six_description']
                      }
                      console.log(newWebsiteData);

                     return res.status(200).json({ message: newWebsiteData });
                      
          
                }catch (err){
                      console.log(err);
                    return res.status(500).json({ error: 'An error occurred while processing your request.' });
                }
          });
        }
        readJson();
}