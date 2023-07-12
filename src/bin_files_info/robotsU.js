const relativePath = "../../HawkenGame/CookedPC/Robots.u";
const baseFileSizeInBytes = 78_019.579;
const decompressedFileSizeInBytes = 144_748_383;

const replacements = [
    //Subtypes
    { offset: 0x00638BB2, from: [0x05], to: [0x02] }, //Change MechSubtype0 ability to Ballistic Barrage
    { offset: 0x0063987C, from: [0x01], to: [0x03] }, //Change MechSubtype2 secondary to Grenade Launcher
    { offset: 0x006391F0, from: [0x01], to: [0x05] }, //Change MechSubtype4 secondary to Repair Torch    
    { offset: 0x006396DE, from: [0x05], to: [0x03] }, //Change MechSubtype7 ability to Weapons Coolant
    { offset: 0x00639D4F, from: [0x08], to: [0x09] }, //Change MechSubtype13 ability to Mobile Turret
    
    //Items
    { offset: 0x0054e573, from: [0xC0, 0x40], to: [0xD0, 0x40] }, //Increase MG turret damage to 6.5
    { offset: 0x0054e58D, from: [0x2C, 0x01], to: [0xC6, 0x00] }, //Decrease Turret initial Health to 198
    { offset: 0x0054e5A9, from: [0x2C, 0x01], to: [0xC6, 0x00] }, //Decrease Turret max Health to 198    
    { offset: 0x0054E6D2, from: [0x98, 0x3A], to: [0xEC, 0x2C] }, //Decrease Turret MaxTargetDistance to 11500

    { offset: 0x0055530A, from: [0x58, 0x02], to: [0x3F, 0x02] }, //Change Blockade Health to 575
    { offset: 0x00555328, from: [0x80, 0x3F], to: [0x80, 0x3E] }, //Change Blockade ShieldSize to 0.25x
    { offset: 0x00555344, from: [0x40, 0x40], to: [0x80, 0x3F] }, //Change Blockade Max Size to 1
    { offset: 0x00555360, from: [0x00, 0x40], to: [0x40, 0x3F] }, //Change Blockade ExpandTime to 0.75s
    { offset: 0x0055537C, from: [0xC0, 0x40], to: [0x80, 0x3F] }, //Change Blockade ContractTime to 1s
    { offset: 0x0055548B, from: [0xC8, 0x41], to: [0x50, 0x41] }, //Change Blockade Lifespan to 13s
    { offset: 0x00609ACC,
        from: [0x49, 0x6D, 0x61, 0x67, 0x65, 0x73, 0x2E, 0x44, 0x65, 0x66, 0x61, 0x75, 0x6C, 0x74, 0x57, 0x65, 0x61, 0x70, 0x6F, 0x6E, 0x50, 0x69, 0x63], 
        to: [0x69, 0x63, 0x6F, 0x6E, 0x73, 0x5F, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x5F, 0x62, 0x6F, 0x6F, 0x73, 0x74, 0x00]
    }, //Change Blockade Icon from placeholder

    { offset: 0x00609667, from: [0x01], to: [0x00] }, //Change Radar item from passive to active to enable usage.
    { offset: 0x00609C6B, from: [0x01], to: [0x00] }, //Change Sensor item from passive to active to enable usage.

    { offset: 0x0060C802, from: [0x13], to: [0x00] }, //Reduce Teleporter uses to 0

    { offset: 0x0060A6A2, from: [0x04], to: [0x01] }, //Reduce Combat Drone uses to 1
    { offset: 0x0060A4F4, from: [0xFA], to: [0x02] }, //Reduce Combat Drone initial health to 130
    { offset: 0x0060A50C, from: [0xFA], to: [0x02] }, //Reduce Combat Drone max health to 130

    { offset: 0x00683CB2, from: [0x34, 0x42], to: [0x20, 0x42] }, //Decrease Rocket Turret Damage to 40
    { offset: 0x006841A8, from: [0x20, 0x42], to: [0x0C, 0x42] }, //Decrease Seeker Turret Damage to 35

    { offset: 0x00687763, from: [0x5E, 0x01], to: [0xC2, 0x01] }, //Change Shield HP to 450

    //Weapons    
    { offset: 0x005ADDC8, from: [0x01], to: [0x00] }, //Disable Hellfire knockback
    { offset: 0x005AEA4B, from: [0x01], to: [0x00] }, //Disable SAARE knockback
    { offset: 0x00682640, from: [0x00, 0x3F], to: [0x80, 0x3F] }, //Change SAARE projectile gravity to 1
    { offset: 0x006BAE35,
        from: [0x1C, 0x29, 0x25, 0x00, 0x00, 0x00, 0x71, 0x33, 0x00, 0x00, 0x16],
        to: [0x1C, 0x03, 0xFC, 0xFF, 0xFF, 0x00, 0x3B, 0x00, 0x00, 0x00, 0x16]
    }, //Change Repair Torch from super.Tick(DeltaTime); to super(Actor).Tick(DeltaTime); Hopefully allows mode switching to work correctly.
    { offset: 0x006BE108, from: [0x93], to: [0x8F] }, //Replace Seeker 1st Person Model with HEAT Cannon Model
    { offset: 0x006BE0EC, from: [0x94], to: [0x90] }, //Replace Seeker 3rd Person Model with HEAT Cannon Model
    { offset: 0x006BEB9D, from: [0x64], to: [0x4B] }, //Replace Slug Rifle recoil animation with SA-Hawkins
    { offset: 0x006BFFBC, from: [0x67], to: [0x4B] }, //Replace Sabot Rifle recoil animation with SA-Hawkins

    //Mech Properties 
    { offset: 0x006550CA, from: [0x04], to: [0x0B] }, //Enable Turret Mode
    { offset: 0x00655D03, from: [0x04], to: [0x0B] }, //Enable item usage in Turret Mode
    { offset: 0x00592315, from: [0x04], to: [0x0B] }, //Enable cycle to next item in Turret Mode
    { offset: 0x005924CF, from: [0x04], to: [0x0B] }, //Enable cycle to prev item in Turret Mode
    { offset: 0x0065D259, from: [0x27], to: [0x28] }, //Show Cockpit Mesh when in Turret Mode
    { offset: 0x0065D281, from: [0x27], to: [0x28] }, //Show Primary Weapon Mesh when in Turret Mode
    { offset: 0x0065D295, from: [0x27], to: [0x28] }, //Show Secondary Weapon  Mesh when in Turret Mode
    { offset: 0x0066A75B, from: [0x66, 0x66, 0xE6, 0x3F], to: [0x00, 0x00, 0x00, 0x00] }, //Remove iframes from turret mode transformation
    { offset: 0x0066A777, from: [0x00, 0x00, 0xC0, 0x3F], to: [0x7B, 0x14, 0x6E, 0x3F] }, //Increase HeavyModeEndTime transformation speed to 0.93s
    { offset: 0x0066A7AF, from: [0x00, 0x00, 0x40, 0x40], to: [0x7B, 0x14, 0x6E, 0x3F] }, //Increase HeavyModeStartTime transformation speed to 0.93s
    { offset: 0x016AA27A, from: [0x44, 0x44, 0xC4, 0x3F], to: [0x8F, 0xC2, 0x75, 0x3F] }, //Increase HeavyModeEndTime animation speed to 0.96s
    { offset: 0x0157FB93, from: [0xCD, 0xCC, 0x4C, 0x40], to: [0xD7, 0xA3, 0x90, 0x3F] }, //Increase HeavyModeStartTime animation speed to 1.13s
    { offset: 0x017A886A, from: [0xCD, 0xCC, 0x4C, 0x40], to: [0xD7, 0xA3, 0x90, 0x3F] }, //Increase ShieldMode_FPS animation speed to 1.13s
    { offset: 0x00682640, from: [0x48, 0x43], to: [0xC8, 0x43] }, //Increase base turret mode speed from 200 to 400
    { offset: 0x006690B7, from: [0x00, 0x00, 0xAF, 0x43], to: [0x00, 0x00, 0x2F, 0x44] }, //Increase R_Pawn ThrusterVerticalSpeed to 700
    { offset: 0x0066AD9F, from: [0x00, 0x00, 0xD2, 0x43], to: [0x00, 0x80, 0x9D, 0x44] } //Increase R_Pawn AccelRate to 1260
];

module.exports = { relativePath, replacements, baseFileSizeInBytes, decompressedFileSizeInBytes };