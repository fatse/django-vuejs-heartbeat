from rest_framework import routers

from notes_app.views import NoteViewSet

router = routers.DefaultRouter()
router.register(r'notes', NoteViewSet, basename='notes_app')
