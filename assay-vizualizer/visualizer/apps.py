from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class VisualizerConfig(AppConfig):
    name = "assay-vizualizer.visualizer"
    verbose_name = _("visualizer")
