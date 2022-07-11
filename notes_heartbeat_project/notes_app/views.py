from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.views.generic import UpdateView
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .models import Note
from .serializers import NoteSerializer


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class NoteUpdateView(UpdateView):
    template_name = 'notes_app/note_edit.html'
    model = Note
    fields = ['title', 'content']

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data()
        note = get_object_or_404(Note, id=self.kwargs['pk'])
        if note.is_locked:
            messages.add_message(self.request, messages.ERROR,
                                 'This note is being updated by someone else. Please try again later!')

        return context


class LockNoteAPI(APIView):
    def post(self, request, **kwargs):
        note = get_object_or_404(Note, id=self.kwargs['pk'])
        note.lock()
        return HttpResponse(status=status.HTTP_200_OK)
