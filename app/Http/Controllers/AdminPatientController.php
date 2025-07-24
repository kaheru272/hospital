<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPatientController extends Controller
{
    // List all patients
    public function index(Request $request)
    {
        $query = User::where('role', 'patient');

        // Search by name, email, or phone
        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%")
                  ->orWhere('phone', 'like', "%$search%");
            });
        }

        $patients = $query->orderBy('name')->paginate(10)->withQueryString();

        return Inertia::render('Admin/Patients/Index', [
            'patients' => $patients,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    // Show a single patient
    public function show($id)
    {
        $patient = User::where('role', 'patient')->findOrFail($id);
        return Inertia::render('Admin/Patients/Show', [
            'patient' => $patient,
        ]);
    }

    // Edit patient form
    public function edit($id)
    {
        $patient = User::where('role', 'patient')->findOrFail($id);
        return Inertia::render('Admin/Patients/Edit', [
            'patient' => $patient,
        ]);
    }

    // Update patient
    public function update(Request $request, $id)
    {
        $patient = User::where('role', 'patient')->findOrFail($id);
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:30',
            'date_of_birth' => 'nullable|date',
            'gender' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'emergency_contact_name' => 'nullable|string|max:255',
            'emergency_contact_phone' => 'nullable|string|max:30',
            'emergency_contact_relationship' => 'nullable|string|max:100',
            'insurance_provider' => 'nullable|string|max:255',
            'insurance_policy_number' => 'nullable|string|max:100',
            'national_id' => 'nullable|string|max:100',
        ]);
        $patient->update($data);
        return redirect()->route('admin.patients.show', $patient->id)->with('success', 'Patient updated successfully.');
    }

    // Delete patient
    public function destroy($id)
    {
        $patient = User::where('role', 'patient')->findOrFail($id);
        $patient->delete();
        return redirect()->route('admin.patients.index')->with('success', 'Patient deleted successfully.');
    }
}
