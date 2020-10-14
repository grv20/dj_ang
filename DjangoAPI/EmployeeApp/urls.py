from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from .views import (departmentApi, employeeApi, SaveFile)


urlpatterns = [
    path('department/',departmentApi),
    path('department/<int:id>',departmentApi),
    path('employee/',employeeApi),
    path('employee/<int:id>',employeeApi),
    path('savefile', SaveFile)
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)