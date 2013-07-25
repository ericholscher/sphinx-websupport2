import json
import requests

from sphinx.websupport.storage import StorageBackend

class WebStorage(StorageBackend):
    """
    A storage class meant to be used by the Sphinx Builder to store nodes.

    This is super inefficient and a hack right now.
    When in prod we'll store all nodes to be added and send them all up at once like with sync_versions.

    """

    def has_node(self, id):
        url = "http://localhost:8000/websupport/_has_node"
        data = {'node_id': id,}
        r = requests.get(url, params=data)
        if r.status_code is 200:
            return r.json()['exists']
        else:
            return False

    def add_node(self, id, document, source):
        url = "http://localhost:8000/websupport/_add_node"
        data = {'id': id, 'document': document, 'source': source}
        headers = {'Content-type': 'application/json'}
        r = requests.post(url, data=json.dumps(data), headers=headers)
        return True
