# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Restaurant(models.Model):
    name = models.CharField(max_length=400)
    address = models.CharField(max_length=500)


class Cook(models.Model):
    name = models.CharField(max_length=300)
    restaurant = models.ForeignKey(Restaurant, related_name='cooks')


class Recipe(models.Model):
    name = models.CharField(max_length=500)
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()

    cook = models.ForeignKey(Cook, related_name='recipes')
