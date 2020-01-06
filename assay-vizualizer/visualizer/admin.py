from django.contrib import admin

from .models import assay_model


class AssayModelAdmin(admin.ModelAdmin):
    """
    Author Admin
    """
    list_display = ['metadata', 'metadata_2']


admin.site.register(assay_model, AssayModelAdmin)
