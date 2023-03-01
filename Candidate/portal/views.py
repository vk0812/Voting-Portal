from django.shortcuts import render
from rest_framework.decorators import api_view #,permission_classes
# from rest_framework import permissions
from portal.models import Candidate
from portal.serializers import CandidateSerializer
from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.response import Response


def CastVote(votes):
    votes+=1

@api_view(['GET'])

def info(request):
    candidate=Candidate.objects.all()
    serializer =CandidateSerializer(candidate, many=True)
    return Response(serializer.data)

@api_view(['PUT'])

def Vote(request):
    data=JSONParser().parse(request)
    candidate_data=Candidate.objects.get(id=data['id'])
    serializer=CandidateSerializer(candidate_data)
    dict= serializer.data
    dict["votes"]= dict["votes"]+1
    serializer=CandidateSerializer(candidate_data,data=dict)
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
    else:
        print(serializer.errors)
    return Response(serializer.data)
    # if CastVote(request.data['id']):
    #     request 
    # vote=Candidate.objects.filter('votes')
    # serializer=CandidateSerializer(vote)
    
    # return Response(serializer.data)



# class CandidateViewSet(viewsets.ModelViewSet):
#     serializer_class = CandidateSerializer
#     queryset=Candidate.objects.all()[:4]
#     serializer = CandidateSerializer(queryset, many=True)

# class VoteViewSet(viewsets.ModelViewSet):
#       serializer_class = CandidateSerializer
#       queryset=Candidate.objects.last()
#       serializer = CandidateSerializer(queryset, many=True)

