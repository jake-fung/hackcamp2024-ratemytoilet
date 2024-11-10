# Data definition

from enum import Enum
from typing import NamedTuple

Location = Enum("Location", ["ikb", "nest", "life"])

Rating = NamedTuple("Rating", [("rate", float), ("comment", str)])

ToiletRating = NamedTuple("ToiletRating", [("location", Location), ("rates", [float]), ("comments", [str])])

