import helpers
from google import genai
from config import GEMINI_API_KEY
import json

def create_todo(description):

    with open('prompt.txt', 'r') as file:
        prompt = file.read()
    
    client = genai.Client(api_key=GEMINI_API_KEY)
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash-lite',
            contents=prompt.format(
                description=description,
                current_time=helpers.get_current_date_formatted(),
                tags=[task.get("tag", "General") for task in helpers.read_db_file()]
            ),
        )
        content = response.text
        print("Generated content from Gemini API:", content)
        content = helpers.clean_gemini_response(content)
        new_todo = json.loads(content)
    except Exception as e:
        return {'error': f'Failed to generate todo: {str(e)}'}

    new_todo['id'] = helpers.get_next_id()
    new_todo['completed'] = False

    tasks = helpers.read_db_file()
    tasks.append(new_todo)
    helpers.write_db_file(tasks)

    return new_todo


def get_todo_by_id(todo_id):
    tasks = helpers.read_db_file()
    for task in tasks:
        if task['id'] == todo_id:
            return task

def update_todo(todo_id, update_data):
    task = get_todo_by_id(todo_id)
    
    tasks = helpers.read_db_file()
    tasks.remove(task)

    for key in task.keys():
        if key in update_data:
            task[key] = update_data[key]

    tasks.append(task)
    helpers.write_db_file(tasks)

    return task


def delete_todo(todo_id):
    task = get_todo_by_id(todo_id)
    
    tasks = helpers.read_db_file()
    tasks.remove(task)
    helpers.write_db_file(tasks)

    return



