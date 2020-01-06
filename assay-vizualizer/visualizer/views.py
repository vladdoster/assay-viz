import json

from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import ListView
from .models import assay_model
from django.core import serializers


class IndexView(ListView):
    template_name = 'pages/index.html'

    context_object_name = "assay_model_list"
    model = assay_model
    queryset = assay_model.objects.all().only('pk', 'metadata', 'metadata_1', 'metadata_2')


def get_model_details(request, pk):
    return HttpResponse(serializers.serialize("json", assay_model.objects.filter(pk=pk)))

