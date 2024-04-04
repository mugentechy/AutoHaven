from flask import jsonify,request
from bs4 import BeautifulSoup
from app.home import blueprint
import requests


@blueprint.route('/search', methods=['GET'])
def search_vehicle():
    search_query = request.args.get('q', '') 
    location = request.args.get('location', '')
    min_price = request.args.get('price_min', '')  # Get min_price query parameter
    max_price = request.args.get('price_max', '')  
    page = int(request.args.get('page', 2))
    verify = request.args.get('verify', '') 
    make = request.args.get('make', '') 
    condition = request.args.get('condition', '') 
    body = request.args.get('body', '')

    
    base_url = 'https://jiji.co.ke'

    api_url = base_url
    if location:
        api_url += f'/{location}/cars'
    if not location:
        api_url +=  f'/cars/'
    if search_query:
        api_url += f'?query={search_query}'
    if not search_query:
        api_url +=f'?'
    if min_price:
        api_url += f'&price_min={min_price}'
    if max_price:
        api_url += f'&price_max={max_price}'
    if verify:
        api_url += f'&filter_id_verify={verify}'

    if make:
        api_url += f'&filter_attr_1_make={make}'

    if condition:
        api_url += f'&filter_attr_100_condition={condition}'

    if body:
        api_url += f'&filter_attr_1164_body={body}'

    api_url += f'?page={page}'

    response = requests.get(api_url)
    print(api_url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        car_elements = soup.select('.b-list-advert__gallery__item')
        cars = []
        for car_element in car_elements:

            car_name = car_element.select_one('.qa-advert-list-item-title').text.strip()
            image_url = car_element.select_one('.b-list-advert-base__img img')['src']
            price = car_element.select_one('.qa-advert-price').text.strip()
            description = car_element.select_one('.b-list-advert-base__description-text').text.strip()
            ad_item = car_element.select_one('.b-list-advert-base__item-attr').text.strip()
            a_tag = car_element.select_one('a')['href']

            cars.append({
                'name': car_name,
                'image_url': image_url,
                'price': price,
                'description': description,
                'href': a_tag, 
               
            })

        response_data = {
            'status': 'success',
            'cars': cars
        }
        return jsonify(response_data), 200
    else:
        return jsonify({'status': 'error', 'message': 'Failed to fetch data from jiji.co.ke/cars'}), response.status_code



    if response.status_code == 200:
        data = response.json()
        print(data)
        return jsonify(data)
    else:
        abort(response.status_code)





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
