import unittest
from src import create_app

class RoutesTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app().test_client()

    def test_cluster_endpoint(self):
        response = self.app.get('/api/cluster?n_responders=3')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertIn('clusters', data)

if __name__ == '__main__':
    unittest.main()