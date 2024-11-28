
from django.contrib import admin
from django.urls import path,include
from accounts.views import ListUsers
from accounts.views import CustomAuthToken

app_name = "accounts"

urlpatterns = [
    path("", include("accounts.urls")),
    path('api/users/',ListUsers.as_view()),
    path('api/token/auth/', CustomAuthToken.as_view()),
    path('admin/', admin.site.urls),
]
