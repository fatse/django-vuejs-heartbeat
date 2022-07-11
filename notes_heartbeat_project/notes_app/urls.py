from django.urls import path, include
from django.views.generic import TemplateView

from notes_heartbeat_project.routers import router

from .views import NoteUpdateView, LockNoteAPI

urlpatterns = [
    path('', TemplateView.as_view(template_name='notes_app/notes.html')),
    path('api/', include(router.urls)),
    path('api/notes/lock-note/<int:pk>/', LockNoteAPI.as_view()),
    path('notes/<int:pk>/update/', NoteUpdateView.as_view(), name='note_update'),

]
