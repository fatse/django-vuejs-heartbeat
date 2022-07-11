from django.db import models
from django.utils import timezone


class Note(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    last_updated_on = models.DateTimeField(auto_now=True)

    locked_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title

    def lock(self):
        self.locked_at = timezone.now() + timezone.timedelta(seconds=60)
        self.save(update_fields={'locked_at'})

    @property
    def is_locked(self):
        if not self.locked_at:
            return False
        return self.locked_at > timezone.now()
