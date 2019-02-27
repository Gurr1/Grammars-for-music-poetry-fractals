from config import *


class GFFileReader:

    def __init__(self):
        self._gf_file_path = ""

    def read_gf_file(self):
        file = open(config.gf_file_path, "r")

        file_as_string = ""
        if file.mode == 'r':
            file_as_string = file.read()

        return file_as_string.split(" ")