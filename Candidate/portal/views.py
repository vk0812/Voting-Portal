from django.shortcuts import render
from rest_framework.decorators import api_view #,permission_classes
# from rest_framework import permissions
from portal.models import Candidate
from portal.serializers import CandidateSerializer
from rest_framework import serializers
from rest_framework.response import Response


def CastVote(votes):
    votes+=1

@api_view(['GET'])
# @permission_classes((permissions.AllowAny,))
def info(request):
    candidate=Candidate.objects.all()
    serializer =CandidateSerializer(candidate, many=True)
    return Response(serializer.data)

@api_view(['POST'])
# @permission_classes((permissions.AllowAny,))
def Vote(request):
    if CastVote(request.data['votes']):
        request 
    vote=Candidate.objects.filter('votes')
    serializer=CandidateSerializer(vote)
    if serializer.is_valid() :
        serializer.save
    return Response(serializer.data)



# class CandidateViewSet(viewsets.ModelViewSet):
#     serializer_class = CandidateSerializer
#     queryset=Candidate.objects.all()[:4]
#     serializer = CandidateSerializer(queryset, many=True)

# class VoteViewSet(viewsets.ModelViewSet):
#       serializer_class = CandidateSerializer
#       queryset=Candidate.objects.last()
#       serializer = CandidateSerializer(queryset, many=True)

