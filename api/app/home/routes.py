from flask import jsonify
from bs4 import BeautifulSoup
from app.home import blueprint
import requests




@blueprint.route('/single/sedan/<string:location>/cars/<string:vehicleId>', methods=['GET'])
def get_sedan(location, vehicleId):
    api_url = f'https://jiji.co.ke/{location}/cars/{vehicleId}'
    response = requests.get(api_url)

    if response.status_code == 200:
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')

        # Initialize car_details dictionary
        car_details = {}
        image_urls = []

        # Get car name
        title_element = soup.find("h1", class_="qa-advert-title")
        car_details["name"] = title_element.text.strip() if title_element else ""

        source_elements = soup.find_all("source", srcset=True)

        image_urls = []

        for source_element in source_elements:

            srcset_value = source_element["srcset"]  
            srcset_parts = srcset_value.split(",")

            for part in srcset_parts:
                image_url = part.strip().split(" ")[0]
                image_urls.append(image_url)

        car_details["images"] = image_urls

 
        price_element = soup.find("span", itemprop="price")
        car_details["price"] = price_element["content"]


        # Get car description
        description_element = soup.find("div", class_="qa-advert-description")
        car_details["description"] = description_element.text.strip() if description_element else ""

        # Get car location
        location_element = soup.find("span", class_="qa-advert-location")
        car_details["location"] = location_element.text.strip() if location_element else ""

        # Get car tags
        tags_container = soup.find("div", class_="b-advert-attributes--tags")
        if tags_container:
            tags = [tag.text.strip() for tag in tags_container.find_all("div", class_="b-advert-attributes__tag")]
            car_details["tags"] = tags

        # Create a JSON response containing the details of the single car
        response_data = {'status': 'success', 'car_details': car_details}
        return jsonify(response_data), 200
    else:
        return jsonify({'status': 'error', 'message': 'Failed to fetch data from jiji.co.ke'}), response.status_code

@blueprint.route('/sedan', methods=['GET'])
def sedans():
    api_url = 'https://jiji.co.ke/cars'
    response = requests.get(api_url)
    
    if response.status_code == 200:
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find all elements containing information about each car
        car_elements = soup.select('.b-list-advert-base')
        
        # Extract information for each car
        cars = []
        for car_element in car_elements:
            # Example: Extracting car name and image URL
            car_name = car_element.select_one('.qa-advert-list-item-title').text.strip()
            image_url = car_element.select_one('.b-list-advert-base__img img')['src']
            price = car_element.select_one('.qa-advert-price').text.strip()
            description = car_element.select_one('.b-list-advert-base__description-text').text.strip()
            # location = car_element.select_one('.b-list-advert__region__text').text.strip()
            a_tag = soup.find("a", class_="b-list-advert-base")["href"]
            
            # Create a dictionary representing the car and add it to the list
            cars.append({
                'name': car_name,
                'image_url': image_url,
                'price': price,
                'description': description,
                'href': a_tag 
                # 'location': location
            })
        
        # Create a JSON response containing the list of cars
        response_data = {
            'status': 'success',
            'cars': cars
        }
        return jsonify(response_data), 200
    else:
        return jsonify({'status': 'error', 'message': 'Failed to fetch data from jiji.co.ke/cars'}), response.status_code
